import { BsLaptop } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoMdPersonAdd } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import { PiUsersFourFill } from "react-icons/pi";







export interface LinkProps {
  label: string;
  path?: string;
  icon?: React.FC;
  nestedLinks?: LinkProps[];
}

const Links: Array<LinkProps> = [
  {
    label: "Dashboard",
    icon: MdDashboard,
    path: "/dashboard",
  },
  {
    label: "Agents",
    icon: IoMdPersonAdd,
    nestedLinks: [
      {
        label: "Summary",
        path: "/dashboard/agents/summary",
      },
      {
        label: "Deposits",
        path: "/dashboard/agents/deposits",
      },
    ],
  },
  {
    label: "customers",
    icon: PiUsersFourFill,
    path: "/dashboard/customers",
  },
  {
    label: "Users",
    icon: FaCircleUser,
    path: "/dashboard/users",
  },
];

export default Links;
