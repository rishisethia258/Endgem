# Endgem
This is a Course Content Management App.

### Features offered by this App

<ul>
	<li>Courses </li>
	<li>Individual course leaderboards</li>
	<li>Upload course material</li>
	<li>Download course material</li>
</ul>

### Setup Guide

Mysql database is used.
The database has the three columns namely, DisplayName , TotalDownloads and location;

<table>
	<thead>
		<td>Field</td>
		<td>Type</td>
	</thead>
	<tr>
		<td>DisplayName</td>
		<td>varchar(255)</td>
	</tr>
	<tr>
		<td>TotalDownloads</td>
		<td>int(11)</td>
	</tr>
	<tr>
		<td>location</td>
		<td>varcharr(255)</td>
	</tr>
</table>

To start the server ,
use the commands

```
npm install
node app.js
```