import { Menu, Button, Text } from '@mantine/core';
import { ChevronDownIcon } from '@modulz/radix-icons';
import { TFilterByRegion } from 'store/store.types';

type FilterByRegionDropDownProps = {
  onSelectItem: (item?: TFilterByRegion) => void;
  items: TFilterByRegion[];
  label: string;
  currentItem?: TFilterByRegion;
};

const FilterByRegionDropDown = ({
  currentItem,
  items,
  label,
  onSelectItem,
}: FilterByRegionDropDownProps) => (
  <Menu
    shadow="md"
    width={300}
    radius="md"
    classNames={{ dropdown: 'element-bg', item: 'element-color' }}
    styles={({ fn }) => ({
      [fn.smallerThan('md')]: {
        justifySelf: 'start',
      },
    })}
  >
    <Menu.Target>
      <Button
        variant="subtle"
        size="xl"
        radius="md"
        className="element-bg"
        styles={{
          root: {
            width: '300px',
          },
          inner: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
        }}
        rightIcon={<ChevronDownIcon width={20} height={20} />}
      >
        {label}
      </Button>
    </Menu.Target>

    <Menu.Dropdown>
      <Menu.Item onClick={() => onSelectItem(undefined)}>
        <Text autoCapitalize="capitalize">None</Text>
      </Menu.Item>
      {items.map((item) => (
        <Menu.Item
          onClick={() => onSelectItem(item)}
          key={item}
          sx={
            (currentItem?.toLowerCase() === item.toLowerCase() &&
              (({ colorScheme, colors }) => ({
                backgroundColor: colorScheme === 'dark' ? colors.darkBlue[1] : colors.gray[1],
              }))) ||
            undefined
          }
        >
          <Text autoCapitalize="capitalize">{item}</Text>
        </Menu.Item>
      ))}
    </Menu.Dropdown>
  </Menu>
);

export default FilterByRegionDropDown;
