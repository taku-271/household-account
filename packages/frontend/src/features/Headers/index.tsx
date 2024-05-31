import {
  Box,
  Button,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@yamada-ui/react";
import { Icon as FontAwesomeIcon } from "@yamada-ui/fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

type HeaderPropsType = {
  height: string;
};

export const Header = ({ height }: HeaderPropsType) => {
  const router = useRouter();

  return (
    <header style={{ height }}>
      <Box
        h="100%"
        py="md"
        px="lg"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderBottom=".5px solid #bbb"
      >
        <Heading as="h1" fontWeight="normal" fontSize="2xl">
          家計簿
        </Heading>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<FontAwesomeIcon icon={faBars}></FontAwesomeIcon>}
            variant="ghost"
            size="lg"
          />
          <MenuList>
            <>
              <MenuGroup title="link">
                <MenuItem py="0">
                  <Button
                    p="0"
                    w="100%"
                    variant="unstyled"
                    onClick={() => router.push("/")}
                    fontWeight="normal"
                  >
                    ホーム
                  </Button>
                </MenuItem>
                <MenuItem py="0">
                  <Button
                    p="0"
                    w="100%"
                    variant="unstyled"
                    onClick={() => {
                      location.href = "http://localhost:3000/";
                    }}
                    fontWeight="normal"
                  >
                    認証
                  </Button>
                </MenuItem>
              </MenuGroup>
            </>
          </MenuList>
        </Menu>
      </Box>
    </header>
  );
};
