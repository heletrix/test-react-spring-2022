import { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';

import { jobList } from './constants';
import { CreateJobModal, Input } from '../../components';

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
    const onToggleCreateJobModal = () => {
        setIsCreateFormVisible((isCreateFormVisible) => !isCreateFormVisible)
    }

    return (
        <FlexOneContainer>
        <Wrapper>
            <Title>Job List</Title>
            <SearchWrapper>
                <Input placeholder="Search" register={register} name="search" />
            </SearchWrapper>
            {jobList.map(({
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
                            {id} -
                            <NameSpan>
                            {' '}
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
            <Button onClick={onToggleCreateJobModal}>
            Add a job
            </Button>
        </Wrapper>
        <CreateJobModal isVisible={isCreateFormVisible} onToggleModal={onToggleCreateJobModal}/>
        </FlexOneContainer>
    );
};

export default JobList;
