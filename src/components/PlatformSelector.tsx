import type { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatforms";
import { Button, Menu, Portal } from "@chakra-ui/react";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ selectedPlatform, onSelectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="surface" size="sm">
          {selectedPlatform?.name || "Filter by Platforms"}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map((p) => (
              <Menu.Item
                onClick={() => onSelectedPlatform(p)}
                key={p.id}
                value={p.slug}>
                {p.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
