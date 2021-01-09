import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  useDisclosure,
  Heading,
  IconButton,
  Divider,
  VStack,
  Link,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useWpMenu } from "../../static-queries/menu";

const HeaderMenu = () => {
  const menuData = useWpMenu();
  const btnRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const icon = <FontAwesomeIcon size="1x" icon={["fa", "bars"]} />;

  const menuItems = menuData.menuItems.nodes.map((menu, index) => {
    return (
      <VStack align="stretch" key={`headerMenu${index}`}>
        <Link href={menu.path} isExternal={!!menu.target}>
          {menu.label}
        </Link>
        <Divider mb="3" />
      </VStack>
    );
  });

  return (
    <>
      <IconButton
        colorScheme="brand"
        aria-label="Menu"
        size="lg"
        icon={icon}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Heading as="h3" fontSize="3xl">
                {menuData.name}
              </Heading>
            </DrawerHeader>
            <DrawerBody>{menuItems}</DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default HeaderMenu;