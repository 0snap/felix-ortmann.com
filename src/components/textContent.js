import React from "react"
import PropTypes from "prop-types"

const TextContent = ({children}) => {
    return (
        <div className={`textContent`}>
        {children}
      </div>
    )
}


TextContent.propTypes = {
    children: PropTypes.node.isRequired,
}

export default TextContent