import pickle
import sys
import pandas as pd


username = sys.argv[1]
filename = 'decisionTree.sav'

#CALL TO API -> TODO
toVerify = pd.DataFrame({
    'No. Followers': [1000000],
    'No. Posts': [240],
    'No. Avg Like': [1045],
    'No. Avg Comments': [20],
    'No. Avg Video Views': [0],
    'Politician (Y/N)': [1],
    'Engagement Rate': [0]

})

loaded_model = pickle.load(open(filename, 'rb'))
result = loaded_model.predict(toVerify)[0]
print(result)
sys.exit(result)
