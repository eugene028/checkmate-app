import {Dispatch, ReactNode, SetStateAction} from "react";
import {Modal, Pressable, StyleSheet, Text, View} from "react-native";

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
      <Pressable style={styles.modalOverlay} onPress={() => setOpen(false)}>
        <View style={styles.modalContainer}>
          <Pressable
            style={styles.modalContent}
            onPress={e => e.stopPropagation()}>
            <Text style={styles.modalTitle}>{title}</Text>
            {children}
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  );
};

export default DialogModal;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    justifyContent: "center",
    elevation: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 20,
  },
});
