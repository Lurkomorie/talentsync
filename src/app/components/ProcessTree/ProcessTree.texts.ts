import { FiActivity, FiBookOpen, FiCheckCircle, FiUser } from "react-icons/fi";
import { ProcessItemProps } from "./ProcessTree.types";

export const processItem: ProcessItemProps[] = [
    {
        isFirst: true,
        icon: FiActivity,
        title: "Introduce meeting",
        description:
            "Let's have a chat about your company, tech stack and open positions. Our mutual succes depends on the amount of detail we have from you!",
    },
    {
        icon: FiBookOpen,
        title: "Sign the contract",
        description:
            "We will send you a contract with all the details of our cooperation. After signing it, we will start looking for the best candidates for your positions.",
    },
    {
        icon: FiCheckCircle,
        title: "Interview candidates",
        description:
            "We will send you a list of candidates that we think are the best fit for your positions. You can interview them and decide who you want to hire.",
    },
    {
        icon: FiUser,
        title: "Hire the best",
        description:
            "After you decide who you want to hire, we will send you a contract with the candidate. After signing it, you will be able to start working with your new employee.",
        isLast: true,
    },
];