@echo off
cd /d "%~dp0"
call node_modules\.bin\next.cmd dev -H 127.0.0.1
