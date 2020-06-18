import React, { useEffect } from "react";
import './index.scss';

interface PageTitleProp {
  title: string
}

const PageTitle: React.FC<PageTitleProp> = (props) => {
  useEffect(() => {
    document.title = props.title
  }, [props.title])
  return (
    <div className="page-title-container">
      <span className="page-title-content">{props.title}</span>
    </div>
  )
}

export default PageTitle
