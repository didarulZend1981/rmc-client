import React from 'react'

const SectionTitle = ({subHeader,mainHeader,classNameSubHeader,classNameMainHeader}) => {
  
    return (
        <div>
            <h3 className={`${classNameMainHeader}`}>
                {mainHeader}
            </h3>
            <h2 className={`${classNameSubHeader}`}>
                {subHeader}
            </h2>
        </div>
    )
}

export default SectionTitle;