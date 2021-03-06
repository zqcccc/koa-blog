import React, { PureComponent } from 'react';
import { Route } from 'react-keeper';
import Home from './home';
import Article from './article';
import Category from './category';
import Publish from './publish';
import Nav from '../components/nav';
import '../admin.css'

export default class extends PureComponent {
    render() {
        return (
            <div className="app">
                <Nav />
                <Route index miss cache='parent' component={Home} />
                <Route cache='parent' path="/article-list"  component={Article} />
                <Route cache='parent' path="/category-list" component={Category} />
                <Route cache='parent' path="/publish" component={Publish} />
            </div>
        );
    }
}
