import { Outlet } from "react-router"
import { useGetRestaurantsQuery } from "../../redux/services/api.js"

import styles from "./RestaurantsPage.module.css"
import { TabLink } from "../../components/TabLink/TabLink.jsx"

export function RestaurantsPage() {

  const { data, isLoading, isError } = useGetRestaurantsQuery()

  if (isLoading) {
    return "Loading..."
  }
  if (isError) {
    return "ERROR"
  }

  return (
    <>
      <div className={ styles.tabs }>
        { data.length ? data.map(({ id, name }) => (
            <TabLink key={ id } to={ id } name={ name }>{ name }</TabLink>
          ))
          : null }
      </div>
      <Outlet />
    </>
  )
}