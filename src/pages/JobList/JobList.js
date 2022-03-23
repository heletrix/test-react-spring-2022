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
    BoldText,
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
            <Input placeholder="Search" register={register} name="search" />
            <Title>Job List</Title>
            {jobList.map(({
                id,
                service,
                date_created,
                datetime_last_activity,
                status,
                user
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
                            {user?.given_name} {user?.family_name}{' '}
                            </NameSpan>
                            {user?.id ? `(${user?.id})` : ''}
                            {service?.name ? `${user?.id ? ' - ' : ''}${service.name}` : ''}
                        </GrayTitle>
                        <Row>
                            <CapitalizedBoldText>{status}</CapitalizedBoldText>
                        </Row>
                        </MainColumn>
                    </ServiceLeftBlock>
                    <ColumnAlignRight>
                        <GrayTitle marginBottom={4}>
                        Last Active: {datetime_last_activity}
                        </GrayTitle>
                        <BoldText>Req date: {date_created}</BoldText>
                    </ColumnAlignRight>
                    </ServiceInfoRow>
                </ServiceWrapper>
                </Fragment>
            );
            })}
            <Button onClick={onToggleCreateJobModal}>
            Add job
            </Button>
        </Wrapper>
        <CreateJobModal isVisible={isCreateFormVisible} onToggleModal={onToggleCreateJobModal}/>
        </FlexOneContainer>
    );
};

export default JobList;
