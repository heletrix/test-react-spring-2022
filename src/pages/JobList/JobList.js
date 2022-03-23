import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobsFetch } from 'store/actions';
import { selectJobList } from 'store/reducers/job';
import { useForm } from 'react-hook-form';

import { CreateJobModal, Input } from 'components';

import {
  FlexOneContainer,
  Wrapper,
  Title,
  ServiceWrapper,
  ServiceInfoRow,
  ServiceLeftBlock,
  MainColumn,
  ColumnAlignRight,
  GrayTitle,
  SearchWrapper,
  CapitalizedBoldText,
  Button,
  NameSpan,
  Row
} from './styled';

const JobList = () => {
  const [isCreateFormVisible, setIsCreateFormVisible] = useState(false);

  const { register } = useForm();

  const dispatch = useDispatch();
  const { list } = useSelector((state) => ({
    list: selectJobList(state)
  }));

  useEffect(() => {
    dispatch(getAllJobsFetch());
  }, [dispatch]);

  const handleToggleCreateJobModal = () => {
    setIsCreateFormVisible((isCreateFormVisible) => !isCreateFormVisible)
  }

  return (
    <FlexOneContainer>
      <Wrapper>
        <Title>Job List</Title>
        <SearchWrapper>
          <Input placeholder="Search" register={register} name="search" />
        </SearchWrapper>
        {list.map(({
          id,
          category,
          description,
          date_created,
          status,
          user_name
        }) => {
          return (
            <Fragment key={id}>
              <ServiceWrapper onClick={() => {}}>
                <ServiceInfoRow>
                  <ServiceLeftBlock>
                    <MainColumn>
                      <GrayTitle>
                        <NameSpan>
                          {user_name}
                        </NameSpan>
                        {category ? `${user_name ? ' - ' : ''}${category}` : ''}
                      </GrayTitle>
                      <Row>
                        <CapitalizedBoldText>{status}</CapitalizedBoldText>
                      </Row>
                    </MainColumn>
                  </ServiceLeftBlock>

                  <ColumnAlignRight>
                    <GrayTitle marginBottom={4}>
                      Requested date:
                    </GrayTitle>
                    <GrayTitle>
                      {(new Date(date_created)).toDateString() || '-'}
                    </GrayTitle>
                  </ColumnAlignRight>
                </ServiceInfoRow>

                <ServiceInfoRow>
                  <GrayTitle>
                    {description}
                  </GrayTitle>
                </ServiceInfoRow>
              </ServiceWrapper>
            </Fragment>
          );
        })}
        <Button onClick={handleToggleCreateJobModal}>
          Add a job
        </Button>
      </Wrapper>
      <CreateJobModal isVisible={isCreateFormVisible} onToggleModal={handleToggleCreateJobModal}/>
    </FlexOneContainer>
  );
};

export default JobList;
