import { Icon } from "@iconify/react";

export const dashboardIcon = () => (
  <Icon icon="mdi:view-dashboard-outline" width="22" height="22" />
);

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "Item 1",
        icon: (
          <Icon
            icon="material-symbols:edit-outline-rounded"
            width="22"
            height="22"
          />
        ),
      },
      {
        name: "Item 2",
        icon: (
          <Icon
            icon="material-symbols:group-outline-rounded"
            width="22"
            height="22"
          />
        ),
      },
      {
        name: "Item 3",
        icon: (
          <Icon
            icon="material-symbols:hourglass-empty-rounded"
            width="22"
            height="22"
          />
        ),
      },
    ],
  },

  {
    title: "Others 1",
    links: [
      {
        name: "Item 4",
        icon: (
          <Icon
            icon="material-symbols:add-a-photo-outline"
            width="22"
            height="22"
          />
        ),
      },
      {
        name: "Item 5",
        icon: <Icon icon="ic:baseline-delete-outline" width="22" height="22" />,
      },
    ],
  },
  {
    title: "Others 2",
    links: [
      {
        name: "Item 6",
        icon: (
          <Icon
            icon="material-symbols:subscriptions-outline"
            width="22"
            height="22"
          />
        ),
      },
      {
        name: "Item 7",
        icon: (
          <Icon
            icon="material-symbols:file-present-outline-rounded"
            width="22"
            height="22"
          />
        ),
      },
      {
        name: "Item 8",
        icon: <Icon icon="ic:outline-access-alarm" width="22" height="22" />,
      },
    ],
  },
];
