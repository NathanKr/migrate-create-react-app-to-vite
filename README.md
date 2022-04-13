<h2>Introduction</h2>
React vite project is much faster than create-react-app, but what does it take to migrate create-react-app to vite?


<h2>Source directory</h2>
This is the create-react-app project of my personal web site with the following tag 0.5 <a href='https://github.com/NathanKr/nathan-krasney-com/releases/tag/0.5'>here</a>

<h2>Target directory</h2>
The resulting vite react project

<h2>Migration process</h2>
<ol>
<li>Create a vite react project using

```
npm init vite@latest
? Project name: target
react
cd target
npm i
npm run dev
```
</li>

<li>Copy public and linkedin_hack directories from the source to target and verify that the app runs without errors</li>
<li>Copy src in source to _src in the target.</li>
<li>change component file extension in _src from js to jsx</li>
<li>change component file import in _src from js to jsx</li>
<li>rename index.html in target to _index.html</li>
<li>move index.html from public in target to target and use

```html
    <script type="module" src="/_src/index.jsx"></script>
```
</li>
<li>remove _index.html , update _src in index.html to src, remove src and rename _src to src</li>
<li>perform the following in target directory

```
npm uninstall react react-dom
```

</li>
<li>copy dependencies from package.json in source to package.json in target and perform

```
npm i
```
</li>
<li>check target with

```
npm run dev
```
</li>
</ol>



