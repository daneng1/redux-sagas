import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import styled from 'styled-components/macro';

import { saga } from './saga';
import { key, countryDetailReducer } from './reducer';
import { actions } from './actions';
import { selectCountryDetail, selectLoading, selectError } from './selectors';

import { LoadingIndicator } from 'app/components/LoadingIndicator';
import { Link } from 'app/components/Link';
import { PageWrapper } from 'app/components/PageWrapper';

// Used RouteComponentProps to pass the country ID from the Country component into the fetchCountryDetail action
type MatchParams = {
  id: string
}

export function CountryDetail(props: RouteComponentProps<MatchParams>) {
  const id = props.match.params.id;

  useInjectReducer({ key: key, reducer: countryDetailReducer });
  useInjectSaga({ key: key, saga });

  const countryDetail = useSelector(selectCountryDetail);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.fetchCountryDetail(id));
  }, [dispatch, id]);

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


const ErrorText = styled.span`
  color: ${p => p.theme.text};
`;

const List = styled.div``;
