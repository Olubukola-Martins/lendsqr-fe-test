import  './Tabs.scss';

interface TabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Tabs = ({ tabs, activeTab, onTabChange }: TabsProps) => {
  return (
    <div className={`tabs`}>
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tabs__item ${activeTab === tab ?'tabs__item--active' : ''}`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
