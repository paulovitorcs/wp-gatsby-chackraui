import styled from "@emotion/styled";
import { primary } from "../../../assets/colors";

export const StyledPostItem = styled.div`
    width: 100%;
    background-color: white;
    padding: 20px;
    cursor: pointer;
    transition: all 0.2s ease-in;
    border: 1px solid ${primary['800']};

    &:hover {
        background-color: ${primary['800']};
        color: white;
    }
`;