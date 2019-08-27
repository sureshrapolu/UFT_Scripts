'this is first commit to github
print "welcome to github"
Reporter.ReportHtmlEvent micPass,"test","it works"
SystemUtil.Run "iexplore","google.com"
wait(10)
Reporter.ReportEvent micPass,Parameter.Item("env"),"Found"
Reporter.ReportEvent micPass,"initial test","passed"

