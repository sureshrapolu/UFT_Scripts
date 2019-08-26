SystemUtil.Run "iexplore","yahoo.com"
Browser("index:=1").Sync
print Parameter.Item("env")
Reporter.ReportEvent micPass,Parameter.Item("env"),"found"
Reporter.ReportEvent micPass,"yahoo page","displayed"
