import React, {useState} from "react";
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

const ModalComponent = (props) => {
  const [modal, setModal] = useState(false)
  const closeButton = (
    <button className="close" onClick={props.toggle} type="button">
      Click
    </button>
  )
  return (
  <>
  <Modal isOpen={modal} toggle={props.toggle} {...props}>
    <ModalHeader close={closeButton}>Hey there {props.name}! </ModalHeader>
    <ModalBody>
    Grimalkin siamese kitten and thai jaguar for jaguar panther. Grimalkin maine coon maine coon scottish fold but balinese birman but siberian. American bobtail manx. Kitten. Manx american shorthair manx lynx, bombay. Norwegian forest grimalkin and tomcat tabby and american shorthair, siamese for burmese. Jaguar ragdoll himalayan. Ragdoll. Lion. Savannah american shorthair yet sphynx burmese so lion. Tabby turkish angora. Tomcat singapura. Havana brown tomcat yet munchkin, yet norwegian forest ocicat sphynx birman. Abyssinian panther or cougar for himalayan persian. Manx egyptian mau yet scottish fold or bombay, norwegian forest. Lion sphynx turkish angora, tomcat, so tabby so siamese. Tiger ocicat, siamese. Ragdoll maine coon and abyssinian . Burmese bombay. Bobcat sphynx yet munchkin for panther.
    </ModalBody>
  </Modal>
  </>
  ) 
}

export default ModalComponent