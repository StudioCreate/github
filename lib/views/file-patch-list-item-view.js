/** @babel */
/** @jsx etch.dom */

import etch from 'etch'
import stateless from 'etch-stateless'

export default stateless(etch, ({filePatch, selected, ...others}) => {
  const status = filePatch.getStatus()
  const className = selected ? 'is-selected' : ''
  return (
    <div {...others} className={`git-FilePatchListView-item is-${status} ${className}`}>
      <span className={`git-FilePatchListView-icon icon icon-diff-${status} status-${status}`} />
      <span className='git-FilePatchListView-path'>{filePatch.getPath()}</span>
    </div>
  )
})