import {
  MyServiceBox,
  MyServiceTabsContainer,
  MyServiceTabsContent,
} from "./style";

interface IMyServiceTabs {
  services: string[];
}

const MyServiceTabs = ({ services }: IMyServiceTabs) => {
  return (
    <MyServiceTabsContainer>
      <MyServiceTabsContent>
        {services?.map((item) => (
          <div className="mainBox">
            <MyServiceBox>
              <p>{item}</p>
              <div></div>
            </MyServiceBox>
          </div>
        ))}
      </MyServiceTabsContent>
    </MyServiceTabsContainer>
  );
};

export default MyServiceTabs;
