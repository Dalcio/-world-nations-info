import useStore from 'store';
import FilterByRegionDropDown from './FilterByRegionDropDown';

const FilterByRegion = () => {
  const currentRegion = useStore((s) => s.currentRegion);
  const filterByRegion = useStore((s) => s.filterByRegion);

  return (
    <FilterByRegionDropDown
      currentItem={currentRegion}
      label={currentRegion ?? 'Filter by Region'}
      items={['Africa', 'America', 'Asia', 'Europe', 'Oceania']}
      onSelectItem={filterByRegion}
    />
  );
};

export default FilterByRegion;
