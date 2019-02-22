import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './index.css'
import svg from './like.svg';
import {
  addSuggestion,
  likeItem
} from '../../modules/list'

const Home = props => (
  <div>
    <table>
      <tbody>
        <tr>
          <th className="suggestionColumn titleRow">Suggestion</th>
          <th className="likesColumn titleRow">Likes</th>
        </tr>
        {props.suggestions.map((sugg, i) => {
          return (<tr key={i}>
            <th className={sugg.liked ? 'likedRow suggestionColumn' : 'defaultRow suggestionColumn'}>{sugg.suggestion}</th>
            <th className="likesColumn">
              <button onClick={() => {props.likeItem(i, props.suggestions)}} className={sugg.liked ? 'likedRow' : 'defaultRow'}>
                {sugg.likes} {sugg.liked ? <img src={svg} alt=''/> : ''}
              </button>
            </th>
          </tr>)
        })}
      </tbody>
    </table>
    <form onSubmit={e => {
      e.preventDefault();
      props.addSuggestion(e, props.suggestions)}
    }>
      <input type="text" placeholder="Add new suggestion"/>
      <input type="submit" value="Add"/>
    </form>
  </div>
)

const mapStateToProps = ({ list }) => ({
  suggestions: list.suggestions
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addSuggestion,
      likeItem
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
