LoadFunctionLibrary "C:\UFT\libs\login.qfl"

login()


hwnd=Browser("index:=0").Object.hwnd
window("hwnd:="&hwnd).maximize
