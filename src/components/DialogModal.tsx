import {Dispatch, ReactNode, SetStateAction} from "react";
import styled from "@emotion/native";
import {theme} from "styles/theme";
import {Modal, StyleSheet} from "react-native";

const DialogModal = ({
  open,
  setOpen,
  title,
  children,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  children: ReactNode;
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={open}
      onRequestClose={() => setOpen(false)}>
      <ModalOverlay onPress={() => setOpen(false)}>
        <ModalContainer>
          <ModalContent onPress={e => e.stopPropagation()}>
            <ModalTitle>{title}</ModalTitle>
            {children}
          </ModalContent>
        </ModalContainer>
      </ModalOverlay>
    </Modal>
  );
};

export default DialogModal;

const ModalOverlay = styled.Pressable`
  flex: 1;
  background-color: "rgba(0, 0, 0, 0.5)";
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.Pressable`
  width: "80%";
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  align-items: "center";
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;

const ModalTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
`;
