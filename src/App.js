import React from 'react';
import './App.css';
import IconButton from './components/buttons/IconButton/IconButton';
import TextButton from './components/buttons/TextButton/TextButton';
import CardContainer from './components/card-container/CardContainer';
import Card from './components/card/Card';
import DropdownCalendar from './components/dropdowns/DropdownCalendar/DropdownCalendar';
import DropdownText from './components/dropdowns/DropdownText/DropdownText';
import Footer from './components/footer/Footer';
import ArticleListView from './components/list-views/article-list-view/ArticleListView';
import IdeaListView from './components/list-views/idea-list-view/IdeaListView';
import Nav from './components/nav/Nav';
import SearchBar from './components/search-bar/SearchBar';

function App() {
  return (
    <div className="App">
      <Nav/>
      <CardContainer/>
      <Card/>
      <DropdownCalendar/>
      <DropdownText/>
      <SearchBar/>
      <ArticleListView/>
      <IdeaListView/>
      <IconButton/>
      <TextButton/>
      <Footer />
      
    </div>
  );
}

export default App;