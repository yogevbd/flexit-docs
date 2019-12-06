(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{117:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return s}));a(146),a(13),a(54),a(150),a(152),a(0);var n=a(127);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r={id:"etl",title:"Data Transformation (ETL)",hide_title:!0,sidebar_label:"Data Transformation (ETL)"},i=[{value:"Overview",id:"overview",children:[]},{value:"Getting Started",id:"getting-started",children:[]},{value:"Tools",id:"tools",children:[{value:"Container",id:"container",children:[]},{value:"SQL Task",id:"sql-task",children:[]},{value:"Data Flow",id:"data-flow",children:[]}]},{value:"Configure (Settings)",id:"configure-settings",children:[]},{value:"Run",id:"run",children:[{value:"Interactive",id:"interactive",children:[]},{value:"Background",id:"background",children:[]}]},{value:"History",id:"history",children:[]},{value:"Schedule",id:"schedule",children:[]},{value:"Clone (Backup)",id:"clone-backup",children:[]},{value:"Extract Data from Oracle BI",id:"extract-data-from-oracle-bi",children:[{value:"Logical SQL Source",id:"logical-sql-source",children:[]},{value:"Report Source",id:"report-source",children:[]},{value:"Connecting to Oracle BI",id:"connecting-to-oracle-bi",children:[]}]}],l={rightToc:i},c="wrapper";function s(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(c,o({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"data-transformation-etl"},"Data Transformation (ETL)"),Object(n.b)("h2",{id:"overview"},"Overview"),Object(n.b)("p",null,"The data transformation feature can be used to Extract, Transform, and Load (ETL) data from one place to another. Data flows make it easy to pull data from many different sources of data in order to cleanse, validate, transform, and integrate data into a wide array of databases. "),Object(n.b)("h2",{id:"getting-started"},"Getting Started"),Object(n.b)("p",null,"From the ",Object(n.b)("em",{parentName:"p"},"Administration > Data Transform")," list, click on an existing transformation or ",Object(n.b)("em",{parentName:"p"},"New Data Transform")," at the top. This will bring you into the design process for a data transformation. Use the tools and design panel to create your transformation process."),Object(n.b)("p",null,Object(n.b)("img",o({parentName:"p"},{src:"/img/etl_list.png",alt:null}))),Object(n.b)("h2",{id:"tools"},"Tools"),Object(n.b)("p",null,"There are three (Container, SQL Task, Data Flow) simple tools you can use to design your transformation. Drag-and-drop any of the following tools from the ",Object(n.b)("em",{parentName:"p"},"Tools")," panel into the ",Object(n.b)("em",{parentName:"p"},"Transformation Design")," panel. The number order of the tasks will be the order that they are processed."),Object(n.b)("h3",{id:"container"},"Container"),Object(n.b)("p",null,"Containers can hold ",Object(n.b)("em",{parentName:"p"},"SQL Tasks")," or ",Object(n.b)("em",{parentName:"p"},"Data Flows"),". Everything inside a container will execute in parallel (i.e. synchronous)."),Object(n.b)("h3",{id:"sql-task"},"SQL Task"),Object(n.b)("p",null,"Use SQL tasks to execute any SQL command. This is commonly used to set database settings or build custom insert/update/delete (CRUD) statements."),Object(n.b)("h3",{id:"data-flow"},"Data Flow"),Object(n.b)("p",null,"Data flow tasks are used to extract data from a source and load it into a destination."),Object(n.b)("p",null,Object(n.b)("img",o({parentName:"p"},{src:"/img/etl_dataflow.png",alt:null}))),Object(n.b)("h4",{id:"name"},"Name"),Object(n.b)("p",null,'To change the name/description to something unique, simply click the "Data Flow" text and enter a name.'),Object(n.b)("h4",{id:"source"},"Source"),Object(n.b)("p",null,"Data transform sources extract data from configured ",Object(n.b)("a",o({parentName:"p"},{href:"administration#data-sources"}),"data sources"),". The drop-down list in the top-left shows existing data sources and also allows you to create a new data source by selecting ",Object(n.b)("em",{parentName:"p"},"Add New"),'. The "# Rows" drop-down will limit the number of rows returned, allowing you to more efficiently test the SQL and set the columns. The limit is only applied for testing in this window, but does not apply when the transformation is ran later.'),Object(n.b)("p",null,"Click the ",Object(n.b)("em",{parentName:"p"},"Run")," button to test and verify your SQL and/or data results."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Important"),' - You must "Run" the source if you want to do column mapping')),Object(n.b)("p",null,Object(n.b)("img",o({parentName:"p"},{src:"/img/etl_sqlsource.png",alt:null}))),Object(n.b)("h4",{id:"column-mapping"},"Column Mapping"),Object(n.b)("p",null,Object(n.b)("img",o({parentName:"p"},{src:"/img/etl_mapping.png",alt:null}))),Object(n.b)("p",null,"Click on the arrow to map the source columns to destination columns."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Important")," - if you do not map the columns, the natural order of the source and destination will be used.")),Object(n.b)("p",null,"Here are the main options for mapping:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Order button: automatically map all the columns based on the order of the columns from the source"),Object(n.b)("li",{parentName:"ul"},"Clear button: remove all existing mappings"),Object(n.b)("li",{parentName:"ul"},"Convert: convert data type from source type into destination type"),Object(n.b)("li",{parentName:"ul"},'Enter Value: manually enter a static value as a source column by setting the Source Column Name to "Enter Value"')),Object(n.b)("h4",{id:"destination"},"Destination"),Object(n.b)("p",null,'Configuring the destination allows you to set the table that you would like to load source data into. Checking "Truncate" will execute the ',Object(n.b)("inlineCode",{parentName:"p"},"TRUNCATE TABLE TABLENAME;")," command, emptying the table rows, prior to loading data."),Object(n.b)("p",null,Object(n.b)("img",o({parentName:"p"},{src:"/img/etl_destdiff.png",alt:null}))),Object(n.b)("p",null,'If the source and destination database are the same, then an additional "Quick Mode" option is available. This executes the ',Object(n.b)("inlineCode",{parentName:"p"},"insert into [DEST] select cols from [SOURCE]")," statement rather than chunking data, which is typically much faster."),Object(n.b)("p",null,Object(n.b)("img",o({parentName:"p"},{src:"/img/etl_destsame.png",alt:null}))),Object(n.b)("h2",{id:"configure-settings"},"Configure (Settings)"),Object(n.b)("p",null,"While designing an ETL process, you can click on ",Object(n.b)("img",o({parentName:"p"},{src:"/img/etl_configbtn.png",alt:null}))," in the top-right to open the configuration properties. There are three main areas:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Success Handling - configuration for what to do when the job runs successfully. ",Object(n.b)("em",{parentName:"li"},"Email Admins on Success")," will send an email to all FlexIt users in the ",Object(n.b)("em",{parentName:"li"},"Admin")," role. ",Object(n.b)("em",{parentName:"li"},"Email on Success")," allows you to enter comma separated email addresses that might differ from the admins. An SMTP email server must be configured (",Object(n.b)("a",o({parentName:"li"},{href:"administration#smtp-email"}),"show me"),")."),Object(n.b)("li",{parentName:"ol"},"Error Handling - similar to ",Object(n.b)("em",{parentName:"li"},"Success Handling"),", but also has an option for ",Object(n.b)("em",{parentName:"li"},"Stop on Fail"),". This stops the job immediately if any task fails. If this is not checked, individual task failures will still result in a successful job run."),Object(n.b)("li",{parentName:"ol"},"Specification - this is the text specification for the current job. This can be used to import/export jobs, which is useful for backups or migrating a job from one environment to another. The specification is in JSON format.")),Object(n.b)("p",null,Object(n.b)("img",o({parentName:"p"},{src:"/img/etl_config.png",alt:null}))),Object(n.b)("h2",{id:"run"},"Run"),Object(n.b)("p",null,"There are a few ways to run ETL jobs and tasks. "),Object(n.b)("h3",{id:"interactive"},"Interactive"),Object(n.b)("p",null,"Interactive mode allows you to run the entire job or individual tasks with real-time updates on status, rows loaded, etc. You can run individual Data Flow tasks by right-clicking on them in the design pane and selecting ",Object(n.b)("em",{parentName:"p"},"Run"),". The entire job can be run by clicking on the ",Object(n.b)("em",{parentName:"p"},"Run")," button in the top-right. Both of these will immediately run the tasks and show results in your browser, as shown here:"),Object(n.b)("p",null,Object(n.b)("img",o({parentName:"p"},{src:"/img/etl_concurrent.png",alt:null}))),Object(n.b)("h3",{id:"background"},"Background"),Object(n.b)("p",null,"Background mode allows you to run the job in the background, either immediately or scheduled for later. To run the background job, go to the list of jobs and click on the ellipsis:\n",Object(n.b)("img",o({parentName:"p"},{src:"/img/etl_runnow.png",alt:null}))),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("em",{parentName:"li"},"Run Now")," starts the job immediately and runs it in the background"),Object(n.b)("li",{parentName:"ol"},Object(n.b)("em",{parentName:"li"},"Schedule")," allows you to set a date/time in the future to run the job (",Object(n.b)("a",o({parentName:"li"},{href:"#schedule"}),"show me"),")")),Object(n.b)("h2",{id:"history"},"History"),Object(n.b)("p",null,"History shows the status and detail of jobs. To show a history for all jobs, click the ",Object(n.b)("em",{parentName:"p"},"Job History")," button at the top of the jobs list page. To show the history for an individual job, there are two methods:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"In design mode, click on the ",Object(n.b)("img",o({parentName:"li"},{src:"/img/etl_historybtn.png",alt:null}))," button. "),Object(n.b)("li",{parentName:"ol"},"From the jobs list, click on the ellipsis and select ",Object(n.b)("em",{parentName:"li"},"History"))),Object(n.b)("h2",{id:"schedule"},"Schedule"),Object(n.b)("p",null,"Jobs can be scheduled to run at a specific time in the future with a recurring pattern. To schedule a job, click the ellipsis to the right of the job and select ",Object(n.b)("em",{parentName:"p"},"Schedule"),"."),Object(n.b)("p",null,Object(n.b)("img",o({parentName:"p"},{src:"/img/flex_schedule.png",alt:null}))),Object(n.b)("p",null,"Enter properties to fit your scheduling needs:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Disabled")," - click this in order to disable the job. The schedule will not be run when disabled, but it will still be available for you to enable later."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Type"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Daily - run every day at a specific time"),Object(n.b)("li",{parentName:"ul"},"Weekly - run weekly on selected days and times"),Object(n.b)("li",{parentName:"ul"},"Monthly - run monthly, e.g. on the 1st day of the month, on the first Monday of the month, etc. "),Object(n.b)("li",{parentName:"ul"},"Cron Format - if none of the above options work, then cron format allows you to create any type of pattern possible (",Object(n.b)("a",o({parentName:"li"},{href:"https://github.com/node-schedule/node-schedule#cron-style-scheduling"}),"see how"),")"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Start")," - date to start the scheduled job"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"End")," - last date the job will be scheduled to run. Click ",Object(n.b)("em",{parentName:"li"},"No End Date")," below to run forever"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"No End Date")," - click this to have the job run forever")),Object(n.b)("h2",{id:"clone-backup"},"Clone (Backup)"),Object(n.b)("p",null,"Cloning a data transformation is an easy way to copy the transformation. This can be useful to save backups or create a new transformation from an existing one. In order to clone, go to the list of all data transformations, click on the ellipsis to the right of the transformation, and select ",Object(n.b)("inlineCode",{parentName:"p"},"Clone"),"."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Tip")," - there are a couple other ways to back up data transformations:"),Object(n.b)("ol",{parentName:"blockquote"},Object(n.b)("li",{parentName:"ol"},"Copy the specification from the transformation ",Object(n.b)("a",o({parentName:"li"},{href:"#configure-settings"}),"Configuration")," and save in a text file"),Object(n.b)("li",{parentName:"ol"},"Create a backup using the ",Object(n.b)("a",o({parentName:"li"},{href:"administration#backup-and-restore"}),"Admin > Config > Backup and Restore")," feature"))),Object(n.b)("h2",{id:"extract-data-from-oracle-bi"},"Extract Data from Oracle BI"),Object(n.b)("p",null,"You can use Oracle BI (OBIEE) as a source to extract data from. Source data can come from either an existing Oracle BI report or a Logical SQL statement."),Object(n.b)("h3",{id:"logical-sql-source"},"Logical SQL Source"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Reference Guide: ",Object(n.b)("a",o({parentName:"p"},{href:"https://docs.oracle.com/middleware/12212/biee/BIESQ/toc.htm"}),"https://docs.oracle.com/middleware/12212/biee/BIESQ/toc.htm"))),Object(n.b)("p",null,"Logical SQL must adhere to the Oracle BI syntax. You can get the Logical SQL for a report from the ",Object(n.b)("em",{parentName:"p"},"Advanced")," tab, shown here:"),Object(n.b)("p",null,Object(n.b)("img",o({parentName:"p"},{src:"/img/oracle_logicalsqlreport.png",alt:null}))),Object(n.b)("p",null,"You can test run the Logical SQL from Oracle BI administration. Click on ",Object(n.b)("em",{parentName:"p"},"Administration")," in the top-right, click ",Object(n.b)("em",{parentName:"p"},"Issue SQL")," under ",Object(n.b)("em",{parentName:"p"},"Maintenance and Troubleshooting"),", enter your SQL and click ",Object(n.b)("em",{parentName:"p"},"Issue SQL"),"."),Object(n.b)("p",null,Object(n.b)("img",o({parentName:"p"},{src:"/img/oracle_logicalsqladmin.png",alt:null}))),Object(n.b)("h3",{id:"report-source"},"Report Source"),Object(n.b)("p",null,"You can select an existing report to extract source data. If the selected report has parameters (i.e. prompts), then you can enter values into the input next to the prompts."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Loop"),' - if there is a limit to the number of rows a report can return, you can use the "Loop" feature. Clicking the loop checkbox sends multiple smaller requests for the data. The example below will send four separate requests to get the data for all four Segment Codes.')),Object(n.b)("p",null,Object(n.b)("img",o({parentName:"p"},{src:"/img/etl_reportsource.png",alt:null}))),Object(n.b)("p",null,Object(n.b)("img",o({parentName:"p"},{src:"/img/etl_biprompts.png",alt:null}))),Object(n.b)("h3",{id:"connecting-to-oracle-bi"},"Connecting to Oracle BI"),Object(n.b)("p",null,"Connect to Oracle BI by creating a new ",Object(n.b)("a",o({parentName:"p"},{href:"administration#data-sources"}),"Data Source"),". Similar to other data sources, you give the connection a ",Object(n.b)("em",{parentName:"p"},"name")," and enter a ",Object(n.b)("em",{parentName:"p"},"host")," and ",Object(n.b)("em",{parentName:"p"},"port"),". "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Web Services Path")," - defaults to ",Object(n.b)("em",{parentName:"li"},"/analytics-ws/saw.dll")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Web Services Version")," - enter the version that your Oracle BI installation is using. You can typically verify the web services version by going to the full URL and typing ",Object(n.b)("em",{parentName:"li"},"?wsdl")," at the end. For example, ",Object(n.b)("a",o({parentName:"li"},{href:"https://abcd.fa.us2.oraclecloud.com/analytics-ws/saw.dll?wsdl"}),"https://abcd.fa.us2.oraclecloud.com/analytics-ws/saw.dll?wsdl"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Username")," - enter a username to connect with. It's good practice to use a system account here, if possible."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Retry on Fail")," - if a connection fails, retry ",Object(n.b)("em",{parentName:"li"},"n")," times. Oracle BI web service requests often fail for no apparent reason. This setting can help mitigate the issue by retrying the request if it initially fails."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Use Custom Login")," - if two-factor (2FA) or multi-factor authentication (MFA) are used, you may need to use a custom login script. This setting allows you to use the Node JS script ",Object(n.b)("em",{parentName:"li"},"[flexit_install_dir]","/config/custom/CustomModule.js")," to properly authenticate and allow access to web services and/or the Oracle GO Url. This process uses the ",Object(n.b)("a",o({parentName:"li"},{href:"https://selenium.dev/"}),"Selenium Web Driver"),", a widely-used and secure tool. "),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Allow GO Url")," - in some cases, the Oracle BI ",Object(n.b)("em",{parentName:"li"},"GO Url")," can be faster and more reliable than the Oracle web services. Enable this setting to allow FlexIt to choose which method to use, with the goal of increasing performance and reliability.")),Object(n.b)("p",null,Object(n.b)("img",o({parentName:"p"},{src:"/img/oracle_datasource.png",alt:null}))))}s.isMDXComponent=!0},127:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return u}));var n=a(0),o=a.n(n),r=o.a.createContext({}),i=function(e){var t=o.a.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},l=function(e){var t=i(e.components);return o.a.createElement(r.Provider,{value:t},e.children)};var c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),b=i(a),u=n,p=b[l+"."+u]||b[u]||s[u]||r;return a?o.a.createElement(p,Object.assign({},{ref:t},c,{components:a})):o.a.createElement(p,Object.assign({},{ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<r;u++)i[u]=a[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},146:function(e,t,a){var n=a(52);n(n.S+n.F,"Object",{assign:a(147)})},147:function(e,t,a){"use strict";var n=a(14),o=a(38),r=a(148),i=a(149),l=a(53),c=a(55),s=Object.assign;e.exports=!s||a(37)((function(){var e={},t={},a=Symbol(),n="abcdefghijklmnopqrst";return e[a]=7,n.split("").forEach((function(e){t[e]=e})),7!=s({},e)[a]||Object.keys(s({},t)).join("")!=n}))?function(e,t){for(var a=l(e),s=arguments.length,b=1,u=r.f,p=i.f;s>b;)for(var m,d=c(arguments[b++]),h=u?o(d).concat(u(d)):o(d),f=h.length,j=0;f>j;)m=h[j++],n&&!p.call(d,m)||(a[m]=d[m]);return a}:s},148:function(e,t){t.f=Object.getOwnPropertySymbols},149:function(e,t){t.f={}.propertyIsEnumerable},150:function(e,t,a){"use strict";var n=a(151),o={};o[a(11)("toStringTag")]="z",o+""!="[object z]"&&a(20)(Object.prototype,"toString",(function(){return"[object "+n(this)+"]"}),!0)},151:function(e,t,a){var n=a(56),o=a(11)("toStringTag"),r="Arguments"==n(function(){return arguments}());e.exports=function(e){var t,a,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(a=function(e,t){try{return e[t]}catch(a){}}(t=Object(e),o))?a:r?n(t):"Object"==(i=n(t))&&"function"==typeof t.callee?"Arguments":i}},152:function(e,t,a){var n=a(53),o=a(38);a(153)("keys",(function(){return function(e){return o(n(e))}}))},153:function(e,t,a){var n=a(52),o=a(19),r=a(37);e.exports=function(e,t){var a=(o.Object||{})[e]||Object[e],i={};i[e]=t(a),n(n.S+n.F*r((function(){a(1)})),"Object",i)}}}]);