import { useForm } from 'react-hook-form';

import styles from '../../constants/styles';
import {  Modal, Button, Textarea, Input } from '../';

import {
  FlexRow,
  ContentWrapper
} from './styled';

const CreateJobModal = ({
  isLoading,
  isVisible,
  onToggleModal
}) => {
  const { register } = useForm();

  const onSubmitForm = () => {
    // TODO: add logic here
  }

  return (
    <Modal
      isModalVisible={isVisible}
      onModalClose={onToggleModal}
      heading='Create New Job'
      backgroundColor={styles.colors.WHITE}
      middlePaddings
      maxWidth={0}
      maxHeight={0}>
      <ContentWrapper>
        <FlexRow>
          <Input register={register} name="user_name" label="Customer Name" />
        </FlexRow>
        <FlexRow>
          <Input register={register} name="category" label="Category" />
        </FlexRow>
        <FlexRow>
          <Textarea register={register} name="description" label="Add Description" />
        </FlexRow>
        <FlexRow>
          <Button title="Cancel" type="secondary" margin="0 20px 0 0" onClick={onToggleModal} />
          <Button
            title='Create'
            onClick={onSubmitForm}
            disabled={isLoading}
          />
        </FlexRow>
      </ContentWrapper>
    </Modal>
  );
};

export default CreateJobModal;
