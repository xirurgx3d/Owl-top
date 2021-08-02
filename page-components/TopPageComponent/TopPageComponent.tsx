import { TopPageComponentProps } from "./TopPageComponent.props"


export const TopPageComponent = ({params,page}: TopPageComponentProps): JSX.Element => {
  return(
    <>
      <h1>hello {params && params.alias}</h1>
    </>
  )
}