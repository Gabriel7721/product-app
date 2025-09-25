import { Button, Menu, Portal } from "@chakra-ui/react";

interface Props {
  sortOrder: string; // "", "name", "-name", "metacritic", "-metacritic"
  onSelectSortOrder: (value: string) => void;
}

const SortSelector = ({ sortOrder, onSelectSortOrder }: Props) => {
  const label = (() => {
    switch (sortOrder) {
      case "name":
        return "Name ↑ (A–Z)";
      case "-name":
        return "Name ↓ (Z–A)";
      case "metacritic":
        return "Metacritic ↑";
      case "-metacritic":
        return "Metacritic ↓";
      default:
        return "Sort: Relevance";
    }
  })();

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="surface" size="sm">
          {label}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="new-txt-1" onClick={() => onSelectSortOrder("")}>
              Relevance
            </Menu.Item>
            <Menu.Item value="new-txt-2" onClick={() => onSelectSortOrder("name")}>
              Name ↑ (A–Z)
            </Menu.Item>
            <Menu.Item value="new-txt-3" onClick={() => onSelectSortOrder("-name")}>
              Name ↓ (Z–A)
            </Menu.Item>
            <Menu.Item value="new-txt-4" onClick={() => onSelectSortOrder("metacritic")}>
              Metacritic ↑
            </Menu.Item>
            <Menu.Item value="new-txt-5" onClick={() => onSelectSortOrder("-metacritic")}>
              Metacritic ↓
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
