import React from "react";
import { useContext, useState } from "react";
import { HomeContext } from "../../contexts/HomeContext";
import { UserContext } from "../../contexts/UserContext";
import { Input } from "../Input";
import { IconSearchInput, StyledSearch, IconClose } from "./style";

interface SeachProps {
  showInput: boolean;
  setShowInput: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Seach({ showInput, setShowInput }: SeachProps) {
  const [inputSeach, setSeach] = useState(null);
  const { filter } = useContext(HomeContext);

  const { width, height } = useContext(UserContext);
  const [animation, setAnimation] = useState(true);

  return (
    <React.Fragment>
      {width < 750 ? (
        <React.Fragment>
          {showInput ? (
            <StyledSearch animation={animation}>
              <Input
                onChange={(e) => setSeach(e.target.value)}
                placeholder="Digitar Pesquisa"
              />
              <IconSearchInput onClick={() => filter(inputSeach)} />
              <IconClose
                onClick={() => {
                  setAnimation(false);
                  setTimeout(() => setShowInput(false), 1000);
                }}
              />
            </StyledSearch>
          ) : (
            ""
          )}
        </React.Fragment>
      ) : (
        <StyledSearch>
          <Input
            onChange={(e) => setSeach(e.target.value)}
            placeholder="Digitar Pesquisa"
          />
          <IconSearchInput onClick={() => filter(inputSeach)} />
        </StyledSearch>
      )}
    </React.Fragment>
  );
}
