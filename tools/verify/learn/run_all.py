"""Runs every learn-brief verification script.  Run: py tools/verify/learn/run_all.py  (exit code 1 on failure)"""
import pathlib, subprocess, sys

HERE = pathlib.Path(__file__).resolve().parent
bad = 0
for name in ("delays.py", "cidr.py", "link.py", "tcp.py", "routing.py", "misc.py"):
    r = subprocess.run([sys.executable, "-I", str(HERE / name)], capture_output=True, text=True)
    print((r.stdout or r.stderr).strip().splitlines()[-1] if (r.stdout or r.stderr).strip() else name + ": no output")
    if r.returncode:
        bad += 1
        print(r.stderr)
sys.exit(1 if bad else 0)
