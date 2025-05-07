import { Card, Typography, Avatar, Box } from '@mui/joy';
import { useDeleteRecommendationMutation } from './RecommendationApiSlice';
import { Button } from 'primereact/button';
import StatusRec from './StatusRec';
import DeleteRec from './DeleteRec';

export default function Recommendation({ recommendation, type }) {
    const [delFunc, { isSuccess: deleteIsSuccess }] = useDeleteRecommendationMutation()
    console.log("recommendation", recommendation)
    return (
        <Card variant="outlined" sx={{ width: '200px', m: 2, direction: 'rtl' }}>
            <Typography level="body2" sx={{ fontStyle: 'italic' }}>
                "{recommendation.body}"
            </Typography>
            <Box mt={2} display="flex" alignItems="center" gap={1}>
                <Avatar>{recommendation.name[0]}</Avatar>
                <Typography level="body1" sx={{ fontFamily: 'cursive', fontWeight: 'bold' }}>
                    {recommendation.name}
                </Typography>
            </Box>
            {type === 'admin' && <Box display="flex" justifyContent="space-between" mt={2}>
                {/* <Button className='button'
                    style={{ margin: '0.5rem' }}
                    onClick={() => delFunc()}
                >מחק</Button> */}
                <DeleteRec id={recommendation._id} />
                <StatusRec id={recommendation._id} />
            </Box>}
        </Card>
    );
}
