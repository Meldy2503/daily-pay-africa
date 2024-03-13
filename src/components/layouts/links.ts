import { BsLaptop } from "react-icons/bs";


export interface LinkProps {
    label: string;
    path?: string;
    icon?: React.FC;
    nestedLinks?: LinkProps[];
  }


  const Links: Array<LinkProps> = [
    {
      label: "Dashboard",
      icon: BsLaptop,
      path: "/dashboard",
    },
    {
      label: "Customers",
      icon: BsLaptop,
      path: "/dashboard/customers",
    },
    {
      label: "Agents",
      icon: BsLaptop,
      nestedLinks: [
        {
          label: "Summary",
          path: "/dashboard/agents",
        },
        {
          label: "Deposits",
          path: "/dashboard/agents/deposits",
        },
      ],
    },
    {
      label: "Users",
      icon: BsLaptop,
      path: "/dashboard/users",
    },
  ];


  export default Links;
