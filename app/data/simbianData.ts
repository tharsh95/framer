import { AlertIcons, MiddleIcons, CardIcons } from '../components/Icons';

// Alert icons used in both components
export const alertIcons = Object.values(AlertIcons);

// Middle icons used in both components
export const middleIcons = [
    { icon: MiddleIcons.FaRobot, label: "AI Agent" },
    { icon: MiddleIcons.FaBrain, label: "Intelligence" },
    { icon: MiddleIcons.FaShieldVirus, label: "Protection" },
    { icon: MiddleIcons.FaCogs, label: "Automation" }
];

// Right cards for Withsimbian component
export const withSimbianRightCards = [
    {
        title: "Ignored Alerts",
        count: 200,
        icon: CardIcons.FaExclamationTriangle,
        color: "bg-transparent-500/10",
        alertIcon: CardIcons.FaExclamationTriangle
    },
    {
        title: "Wrongly Closed Alerts",
        count: 35,
        icon: CardIcons.FaTimesCircle,
        color: "bg-transparent-500/10",
        alertIcon: CardIcons.FaTimesCircle
    },
    {
        title: "Active Threats",
        count: 10,
        icon: CardIcons.FaShieldAlt,
        color: "bg-transparent-500/10",
        alertIcon: CardIcons.FaShieldAlt
    }
];

// Right cards for Withoutsimbian component
export const withoutSimbianRightCards = [
    {
        title: "Ignored Alerts",
        count: 200,
        icon: CardIcons.FaExclamationTriangle,
        color: "bg-transparent-500/10",
        alertIcon: CardIcons.FaExclamationTriangle
    },
    {
        title: "Wrongly Closed Alerts",
        count: 35,
        icon: CardIcons.FaTimesCircle,
        color: "bg-transparent-500/10",
        alertIcon: CardIcons.FaTimesCircle
    },
    {
        title: "Active Threats",
        count: 10,
        icon: CardIcons.FaShieldAlt,
        color: "bg-transparent-500/10",
        alertIcon: CardIcons.FaShieldAlt
    }
];

// Cards for Withsimbian component
export const withSimbianCards = [
    {
        text: "Triaged & Reported",
        description: "SOC Agent handled investigation and reporting",
        icon: CardIcons.FaClock
    },
    {
        text: "Automated Response",
        description: "Incident automatically contained",
        icon: CardIcons.FaExclamationTriangle
    },
    {
        text: "Comprehensive Analysis",
        description: "AI recognized patterns",
        icon: CardIcons.FaShieldAlt
    },
    {
        text: "Accurate Detection",
        description: "Zero false positives",
        icon: CardIcons.FaPuzzlePiece
    },
    {
        text: "24/7 Coverage",
        description: "No analyst fatigue",
        icon: CardIcons.FaTools
    },
];

// Cards for Withoutsimbian component
export const withoutSimbianCards = [
    {
        text: "Manual Response",
        description: "Incident manually contained",
        icon: CardIcons.FaTools
    },
    {
        text: "Limited Analysis",
        description: "Human recognized patterns",
        icon: CardIcons.FaTools
    },
    {
        text: "False Positives",
        description: "High false positive rate",
        icon: CardIcons.FaTools
    },
    {
        text: "Limited Coverage",
        description: "Analyst fatigue",
        icon: CardIcons.FaTools
    },
    {
        text: "Manual Triaging",
        description: "SOC Agent manually handled investigation and reporting",
        icon: CardIcons.FaClock
    }
]; 