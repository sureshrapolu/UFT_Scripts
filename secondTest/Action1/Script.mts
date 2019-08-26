SystemUtil.Run "iexplore","yahoo.com"
Browser("index:=1").Sync
Reporter.ReportEvent micPass,"yahoo page","displayed"
