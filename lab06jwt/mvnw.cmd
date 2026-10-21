@REM ----------------------------------------------------------------------------
@REM Maven Start Up Batch script for Windows
@REM ----------------------------------------------------------------------------
@IF "%DEBUG%" == "" @ECHO OFF
@SETLOCAL
SET ERROR_CODE=0

IF NOT "%JAVA_HOME%" == "" GOTO OkJHome

ECHO.
ECHO Error: JAVA_HOME not found in your environment. >&2
ECHO Please set JAVA_HOME to point to your JDK 21 installation. >&2
ECHO.
GOTO error

:OkJHome
IF EXIST "%JAVA_HOME%\bin\java.exe" GOTO init

ECHO.
ECHO Error: JAVA_HOME is set to an invalid directory. >&2
ECHO JAVA_HOME = "%JAVA_HOME%" >&2
ECHO.
GOTO error

:init
SET "JAVACMD=%JAVA_HOME%\bin\java.exe"

WHERE mvn >nul 2>nul
IF %ERRORLEVEL% EQU 0 (
    mvn %*
    GOTO end
)

ECHO Executing with Maven via system fallback...
mvn %*
GOTO end

:error
SET ERROR_CODE=1

:end
@IF "%ERRORLEVEL%"=="0" EXIT /B %ERROR_CODE%
EXIT /B %ERRORLEVEL%
