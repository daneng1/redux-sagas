import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { saga } from './saga';
import { key, countryDetailReducer } from './reducer';
import { actions } from './actions';
import { selectCountryDetail, selectLoading, selectError } from './selectors';
import { LoadingIndicator } from 'app/components/LoadingIndicator';
import { Link } from 'app/components/Link';
import { PageWrapper } from 'app/components/PageWrapper';

export function CountryDetail() {
  useInjectReducer({ key: key, reducer: countryDetailReducer });
  useInjectSaga({ key: key, saga });

  const countryDetail = useSelector(selectCountryDetail);
  console.log('index.js Country Details', countryDetail);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.fetchCountryDetail());
  }, [dispatch]);

  return (
    <PageWrapper>
      <h1>Country Details</h1>
      {isLoading && <LoadingIndicator small />}
      {countryDetail ? (
        <>
        <List>
          <p>COUNTRY: {countryDetail.name}</p>
          <p>CURRENCY CODE: {countryDetail.currency_code}</p>
        </List>
        <div>
          <Link to={`/countries/`}>Countries List</Link>
        </div>
        <div>
          <Link to={`/`}>Home</Link>
        </div>
        </>
      ) : error ? (
        <ErrorText>{error}</ErrorText>
      ) : null}
    </PageWrapper>
  );
}

// const Country = styled.li`
//   color: blue;
// `;

const ErrorText = styled.span`
  color: ${p => p.theme.text};
`;

const List = styled.div``;
