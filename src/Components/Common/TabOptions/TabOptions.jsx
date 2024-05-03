import React from 'react'

function TabOptions({ activeTab, setActiveTab }) {

  const tabs = [
    {
      id: 1,
      name: "Delivery",
      active_img: "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
      backDrop: "#FCEEC0",
      inactive_img: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
    },
    {
      id: 2,
      name: "Dining Out",
      active_img: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
      backDrop: "#E5F3F3",
      inactive_img: "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"
    },
    {
      id: 3,
      name: "Nightlife",
      active_img: "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
      backDrop: "#EDf4FF",
      inactive_img: "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"
    },
  ]
  return (
    <div className='' style={{boxShadow: 'rgb(232, 232, 232) 0px -0.5px 0px inset'}}>
      <div className='max-width options-wrapper flex'>
        {tabs.map((tab, index) => {
          return <div onClick={() => setActiveTab(tab.name)}
            className={`tab-item flex justify-center items-center cursor-pointer ${activeTab === tab.name && "active-tab border-b-[2px] border-zomatoRed"} mr-[24px] p-[12px] pb-[20px]`} key={index}>

            <div style={ {backgroundColor: activeTab === tab.name ? tab.backDrop : "#f8f8f8"}} className={"h-[60px] w-[60px] rounded-full flex justify-center items-center"}>

              <img src={activeTab === tab.name ? tab.active_img : tab.inactive_img} alt={tab.name} className='tab-image h-[30px] w-[30px]' />

            </div>
            <div className={`text-[20px] font-[400] ml-[10px] text-inactiveText ${activeTab===tab.name && "text-zomatoRed"}`}>
                {tab.name}
              </div>

          </div>
        })}
      </div>

    </div>
  )
}

export default TabOptions