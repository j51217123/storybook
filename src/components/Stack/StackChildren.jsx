import { StyledStackChildren } from "./Stack.Styled";

const StackChildren = props => {
    const { numberOfChildren } = props;
    return <StyledStackChildren>{numberOfChildren}</StyledStackChildren>;
};

export default StackChildren;
