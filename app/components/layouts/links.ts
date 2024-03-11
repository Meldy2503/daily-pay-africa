import { BsLaptop } from "react-icons/bs";


export interface LinkProps {
    label: string;
    path?: string;
    icon?: React.FC;
    nestedLinks?: LinkProps[];
  }


  const Links: Array<LinkProps> = [
    {
      label: "Agents",
      icon: BsLaptop,
      nestedLinks: [
        {
          label: "Agents",
          path: "/dashboard/agents",
        },
        {
          label: "Deposits",
          path: "/dashboard/agents/deposits",
        },
      ],
    },
    {
      label: "Customers",
      icon: BsLaptop,
      path: "/dashboard/customers",
    },
    {
      label: "Users",
      icon: BsLaptop,
      path: "/dashboard/users",
    },
  ];


  export default Links;
