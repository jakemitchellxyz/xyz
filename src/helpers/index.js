export const getPageTitleFromPath = (path, routes) => {
  if (!routes) return null
  if (routes.routes && routes.routes.length > 0) {
    const title = routes.routes.map(route => {
      if (route.path === path) return route.title
      if (route.routes) return getPageTitleFromPath(path, route)
    }).filter(route => !!route)

    return title[0] || null
  }
  return null
}

export const getPageFolderFromPath = (path, routes, containingFolder = {}) => {
  if (!routes) return containingFolder
  if (routes.routes && routes.routes.length > 0) {
    const title = routes.routes.map(route => {
      if (route.path === path) return containingFolder
      if (route.routes) return getPageFolderFromPath(path, route, route)
    }).filter(route => !!route)

    return title[0] || null
  }
  return null
}