/**
 * Created by ddxx on 2020/5/29
 *
 * 全局主题变量
 */

const { getThemeVariables } = require('antd/dist/theme');

const themes = [
    {
        name: 'def',
        isDark: false,
        isCompact: true,
        primaryColor: '#078A45',
        bodyBackground: '#e7e7e7',
    }
]

/**
 *
 * @param name
 */
module.exports = name => {
    const theme = themes.find(theme => theme.name === name);
    const variables = getThemeVariables({
        dark: theme.isDark,
        isCompact: theme.isCompact
    });


    variables['my-theme'] = theme.name;
    variables['primary-color'] = theme.primaryColor

    return variables;
}
