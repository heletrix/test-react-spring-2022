import { ModalShadow, ModalContent, Heading, FlexRow } from './styled';

const Modal = ({
  children,
  isModalVisible = false,
  onModalClose = () => {},
  backgroundColor,
  bundleModal,
  heading = '',
  middlePaddings,
  maxWidth = 504,
  minWidth = 504,
  maxHeight = 500,
  overflowMode,
  padding
}) => {
  if (!isModalVisible) {
    return null;
  }

  return (
    <ModalShadow visible={isModalVisible} onMouseDown={onModalClose}>
      <ModalContent
        onMouseDown={(e) => e.stopPropagation()}
        backgroundColor={backgroundColor}
        middlePaddings={middlePaddings}
        bundleModal={bundleModal}
        maxWidth={maxWidth}
        minWidth={minWidth}
        maxHeight={maxHeight}
        overflowMode={overflowMode}
        padding={padding}>
        {Boolean(heading) && (
          <FlexRow withoutHeading={!heading}>
            {heading && <Heading>{heading}</Heading>}
          </FlexRow>
        )}
        {children}
      </ModalContent>
    </ModalShadow>
  );
};

Modal.defaultProps = {
  onModalClose: () => {},
  visible: false
};

export default Modal;
