i haven't deleted the dummy data (watch min 7,8 of 131)

#git commands

git init - Create a new git repo
git status - View the changes to your project code
git add - Add files to staging area
git commit - Creates a new commit with files from staging area
git log - View recent commits



#Webpack_Notes

change use : [ 'css-loader','sass-loader ] && cheap-module-eval-source-map ---> use: [{loader:'css-loader',options : {sourceMap:true}},{loader:'sass-loader',options:{sourceMap:tru}}] &&
inline-source-map


#Test_Notes

import React from 'react';
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";
import expensess from '../fixtures/expenses'
const check={expenses:[expensess[0]]}
test("1 expense", () => {
    const wrapper = shallow(<ExpensesSummary {...check}/>);
    expect(wrapper).toMatchSnapshot()
});
//expenses={check} ghalateee