@echo off

IF "%1" EQU "-r" (
  echo "Run js"
  node .\dist\run.js "%2" "%3"
) ELSE (
  echo "Compile to js and run"
  IF EXIST "dist" (
    rmdir /s /q "dist"
  )
  npx tsc --build
  node .\dist\run.js "%1" "%2"
)
