import React from "react";

// import PropTypes from 'prop-types';
// import Bu from "@puzzle-mussia/button1";
// import MuButton, { ButtonProps } from "@material-ui/core/Button";
// import { ButtonProps } from "@material-ui/core/Button";
import styles from "./button.module.scss";
// import styles from "./button.module.css";
// import styles from "./button.less"; // todo - failing at test
// const styles = { root: "as" };

// interface Props extends ButtonProps {
//     text?: string;
//     onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
//     data?: [];
//     dataa?: [];
//     lol?: [];
//     // size?: "medium" | "large" | "small";
//     // children: {}
// }
interface Props {
    // text?: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    // data?: [];
    // dataa?: [];
    // lol?: [];
    // size?: "medium" | "large" | "small";
    // children: {}
}
const Button: React.FC<Props> = (props: Props) => {
    // console.log('props', props.onClick)
    const { onClick } = props;

    // const [count, setCount] = useState<number | null>(5);
    //
    // setCount(null);
    // return <Bu data={[]} />;
    return (
        <button type="button" onClick={onClick} className={styles.root}>
            My Buttons s
        </button>
    );
};

// Button.defaultProps = {
//     // children: null
// };
//
// Button.propTypes = {
//     // children: PropTypes.oneOfType([
//     //     PropTypes.node,
//     //     PropTypes.func,
//     //     PropTypes.string,
//     //     PropTypes.element
//     // ]),
//     // onClick: PropTypes.func.isRequired
// };

export default Button;
